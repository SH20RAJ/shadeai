import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}