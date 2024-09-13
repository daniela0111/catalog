import Header from './Header'; // Assuming you have a Header component
//import Footer from './Footer'; // Assuming you have a Footer component

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;