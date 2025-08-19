import Header from "../Component/Headers/Header";
import PageHeader from "../Component/Blog/PageHeader";
import Newsletter from "../Component/Newsletters/Newsletter";
import Footer from "../Component/Footers/Footer";
import BlogSection from "../Component/Blog/BlogSection";

const Blog= () =>{
  return (
    <>
      <Header />
      <PageHeader />
      <BlogSection />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Blog;