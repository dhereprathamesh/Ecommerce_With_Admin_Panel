import React from "react";
import Layout from "../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus" style={{ marginTop: "50px" }}>
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Your privacy is important to us. This Privacy Policy outlines how we
            collect, use, and protect your personal information when you visit
            our e-commerce platform.
          </p>
          <p className="text-justify mt-2">
            <strong>Information Collection:</strong> We collect personal
            information that you provide to us when you create an account, place
            an order, or contact our customer service. This may include your
            name, email address, phone number, and payment details.
          </p>
          <p className="text-justify mt-2">
            <strong>Use of Information:</strong> We use your personal
            information to process your orders, provide customer support, and
            improve our services. We may also use your information to send you
            promotional materials, but you can opt out at any time.
          </p>
          <p className="text-justify mt-2">
            <strong>Data Protection:</strong> We implement a variety of security
            measures to ensure the safety of your personal information. Your
            data is stored on secure servers and is protected against
            unauthorized access.
          </p>
          {/* <p className="text-justify mt-2">
            <strong>Cookies:</strong> Our website uses cookies to enhance your
            browsing experience. Cookies help us understand how you use our
            site, enabling us to provide you with a more personalized
            experience.
          </p>
          <p className="text-justify mt-2">
            <strong>Third-Party Disclosure:</strong> We do not sell, trade, or
            otherwise transfer your personal information to outside parties
            except as necessary to provide our services.
          </p>
          <p className="text-justify mt-2">
            <strong>Policy Changes:</strong> We may update this Privacy Policy
            from time to time. Any changes will be posted on this page, and we
            encourage you to review our policy periodically.
          </p>
          <p className="text-justify mt-2">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at support@example.com. Thank you for trusting us
            with your personal information.
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
