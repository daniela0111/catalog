import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import { writeFile } from 'fs/promises';

const upload = multer({ dest: './public/assets/' });

interface RequestWithFile extends NextApiRequest {
  file: {
    buffer: Buffer;
    originalname: string;
  };
}

const POST = async (req: RequestWithFile, res: NextApiResponse) => {
  upload(req, res, async (err: any) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading file' });
    }

    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'You didn\'t upload any file' });
    }

    const filename = file.originalname.replaceAll(' ', '_');
    console.log(filename);

    try {
      await writeFile(
        path.join(process.cwd(), 'public/assets/' + filename),
        file.buffer
      );
      return res.status(201).json({ Message: 'Success' });
    } catch (error) {
      console.log('Error occured ', error);
      return res.status(500).json({ Message: 'Failed' });
    }
  });
};

export default POST;