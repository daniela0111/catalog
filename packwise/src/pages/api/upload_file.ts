import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Set up multer storage
const storage = multer.memoryStorage(); // Use memory storage to access the file buffer
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Only image files are allowed'));
    }
    cb(null, true);
  },
});

// Create the API route handler
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  // Use the multer middleware
  upload.single('file')((req as any), (res as any), async (err: any) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File size exceeds the limit' });
      } else if (err.message === 'Only image files are allowed') {
        return res.status(400).json({ error: 'Only image files are allowed' });
      }
      return res.status(400).json({ error: 'Error uploading file' });
    }

    const file = (req as any).file; // Cast req to any to access file
    if (!file) {
      return res.status(400).json({ error: 'You didn\'t upload any file' });
    }

    const filename = `${Date.now()}_${file.originalname}`;
    const filePath = path.join(process.cwd(), 'public/assets', filename);

    try {
      // Write the file to the desired location
      fs.writeFileSync(filePath, file.buffer);
      return res.status(201).json({ message: 'File uploaded successfully', filename });
    } catch (error) {
      console.error('Error occurred ', error);
      return res.status(500).json({ message: 'Failed to upload file' });
    }
  });
};

export default POST;