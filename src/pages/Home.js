const { default: Blogs } = require("../components/Blogs/Blogs");
const { default: Carousel } = require("../components/Carousel/Carousel");
const { default: Footer } = require("../components/Footer/Footer");
const { default: NavBar } = require("../components/NavBar/NavBar");

function Home() {
  return (
    <section className="homepage">
      <NavBar></NavBar>
      <Carousel></Carousel>
      <Blogs></Blogs>
      <Footer/>
    </section>
  )
}

export default Home
