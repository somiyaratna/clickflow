import { TrendingUp, Layers, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4 gap-4 justify-start">
          <Link to={"/"}>
            {" "}
            <ChevronLeft size={32} className="cursor-pointer" />
          </Link>
          <h1 className="text-3xl font-bold">
            Digital Innovation That Works For You
          </h1>
        </div>
        <p className="mb-4">
          Clickflow was founded with one clear motive: Help businesses optimize
          and scale their online presence.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          The Future of Marketing is Here: Clickflow
        </h2>
        <p className="mb-4">
          Clickflow is your full-service advertising agency focused on
          amplifying the revenue of your Tech-Based E-Commerce business. Based
          in the heart of Saskatchewan, Canada, our team has a fluent background
          in all things marketing; however, we specialize in one thing and do it
          well: multiplying your return on Ad Spend. Regardless of size, we work
          with a diverse group of E-Commerce business owners focused in Canada,
          U.S.A., U.K., and Australia. The Clickflow team is a niche, handpicked
          group of experts in the digital market. From Ad Campaign operation to
          Sales Funnel Support, our team encompasses the experience needed to
          grow the sales of your Tech-Based E-Commerce business.
        </p>
        <p className="mb-4 font-semibold">
          We specialize in one thing and do it well: multiplying your return on
          Ad Spend.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          WHAT DRIVES CLICKFLOW:
        </h2>
        <p className="mb-4">
          At Clickflow we practice what we preach, quality over quantity. We
          take no shortcuts and our team values quality work which is our key in
          growing our diverse knowledge and clientele.
        </p>
        <p className="mb-4">
          We believe no matter what your business model looks like, you should
          be able to track how your investment is benefitting you. We utilize a
          plethora of indicators to monitor your ad spend and track the revenue
          generated. Facebook Pixel, Google Analytics, Tiktok for Business,
          Linkedin Insight Tag, to name a few.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          CLICKFLOW SERVICES:
        </h2>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <TrendingUp size={24} className="mr-2" />
            <h3 className="text-xl font-semibold">
              Scaling your Revenue Through Advertising:
            </h3>
          </div>
          <ul className="list-disc list-inside ml-6">
            <li>Tiktok Ads</li>
            <li>Instagram Ads</li>
            <li>Facebook Ads</li>
            <li>Google Ads</li>
            <li>Amazon Ads</li>
            <li>Online Ad Campaign design, implementation, and management</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Layers size={24} className="mr-2" />
            <h3 className="text-xl font-semibold">Forward Outlook:</h3>
          </div>
          <p className="ml-6">
            A-Z Sales Funnel Support: Converting cold audiences into paying
            customers through the power of social media
          </p>
        </div>
        <p className="mb-4">
          Our passion comes from the unique needs of each business we work with,
          it is what drives us to think outside the box when developing a
          scalable online ad stream.
        </p>
        <p className="font-semibold">Let&apos;s build yours today!</p>
      </div>
    </div>
  );
};

export default AboutCompany;
