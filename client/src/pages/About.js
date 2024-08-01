import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus " style={{ marginTop: "50px" }}>
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our E-commerce platform! Our mission is to provide you
            with a seamless and enjoyable shopping experience. We offer a wide
            range of products to cater to all your needs, ensuring quality and
            satisfaction with every purchase. Our dedicated team works
            tirelessly to bring you the latest trends and best deals in the
            market. With our user-friendly interface and secure payment options,
            shopping with us is not only easy but also safe. Join us in our
            journey to revolutionize online shopping. Thank you for choosing us!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
