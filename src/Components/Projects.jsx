import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
// import axios from "axios";

function Projects() {
  // const token =
  //   "eyJ4NXQiOiJNell5TlRrMVpEZ3laVFEyTmpBMlpUSXlNR1V5Wm1Rek5qZzFNVEV4TlRjeE16RTRPVGsyT0ROa1pERm1PVGRsWVRsa1ltUTNOVFpsTWpZMlltVTBPUSIsImtpZCI6Ik16WXlOVGsxWkRneVpUUTJOakEyWlRJeU1HVXlabVF6TmpnMU1URXhOVGN4TXpFNE9UazJPRE5rWkRGbU9UZGxZVGxrWW1RM05UWmxNalkyWW1VME9RX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJtYXJrQGNhcmJvbi5zdXBlciIsImF1ZCI6ImRJUjc4MVdmdU1fNURIbDFkYTJwSWVWcVFaY2EiLCJuYmYiOjE2NDc5NTY2ODIsImF6cCI6ImRJUjc4MVdmdU1fNURIbDFkYTJwSWVWcVFaY2EiLCJzY29wZSI6ImFtX2FwcGxpY2F0aW9uX3Njb3BlIGRlZmF1bHQiLCJpc3MiOiJodHRwczpcL1wvZGV2ZWxvcGVyLmNvLW9wYmFuay5jby5rZTo5NDQzXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjQ3OTYwMjgyLCJpYXQiOjE2NDc5NTY2ODIsImp0aSI6ImY5OGExNWZiLTE0NjAtNGFmOS1iNTA4LWExZWE3OGUwYzNkMyJ9.SuAZJXi7lkc1co7t3IhkQOlH55QzMoz9SZ5ud5MlxJ84x0el0GZz1VzZnu2GVmhUmzK0BoIXKcteOkQfX70EsNQsVM-yr2Qbcyq-dS0Kv9i2zK9jwwOdsb3Ha_iGtariLAAr1lAo6WLJDYdUB-b1xsvcBvNXIbLFv19nJEysJ3ktoeXSp-I8Tqt1Y3U3dWbQodn8kWFHcjk6PxJCSKrjxXq4bHOVe_9qgysqcC4Jl_USfK_tfMzG34VtW_9SZ2pSipxaSUtCG_WIp4y0jfQX20QkhDSv5FGcH7aMqYKkD9VQaKyCbYNjlj4AVvB6MAB_4iHzX5zUApFDeFKj-nMGBg";
  // const config = {
  //   headers: {
  //     accept: "application/json",
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${token}`,
  //   },
  // };

  // const data = {
  //   MessageReference: "40ca18c6765086089a1",
  //   FromCurrencyCode: "KES",
  //   ToCurrencyCode: "GBP",
  // };

  // axios
  //   .post(
  //     "https://openapi-sandbox.co-opbank.co.ke/Enquiry/ExchangeRate/1.0.0/",
  //     data,
  //     config
  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //   });
  return (
    <section id="projects" className="text-white bg-blue-500 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Personal Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have built a few personal projects to showcase my skills and to 
            learn new things.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
