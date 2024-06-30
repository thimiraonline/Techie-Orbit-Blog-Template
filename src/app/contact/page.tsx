"use client";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const Contact = ({ params }: { params: any }) => {
  const { slug } = params;

  return (
    <>
      <Header />
      <h2 className="flex items-center justify-center h-screen">
        Coming Soon....
      </h2>
      <Footer />
    </>
  );
};

export default Contact;
