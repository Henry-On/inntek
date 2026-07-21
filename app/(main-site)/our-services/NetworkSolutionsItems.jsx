import NetworkSolutionItem from "./NetworkSolutionItem";

import React from 'react'

const networkSolutions = [
  {
    name: "LAN/Wireless Network Installations",
    description:
      "We set up fast, secure LAN and wireless networks using access points and modern Wi-Fi tech—making sure that you have optimal connectivity across office spaces, remote setups, and mobile devices. Our Wireless service includes the use of Access Point Wi-Fi, provided using wireless facilities.",
    image: "/images/portrait-hero.png",
    SN: 1,
    keywords: ["Access Point Deployment", "Wi-Fi Optimization", "Site Survey"],
  },
  {
    name: "Data Center, Workplace Connectivity",
    description:
      "With our Data Center as a Service (DCaaS) model, we deliver scalable cloud infrastructure for remote access to servers, storage, and networking resources",
    image: "/images/portrait-hero.png",
    SN: 2,
    keywords: ["Remote Access Solutions", "Scalable Infrastructure", "Private Cloud"],
  },
  {
    name: "Fiber Optic  Installations and Maintenance",
    description:
      "We deploy cutting-edge fiber optic technology to deliver ultra-fast, low-latency communication infrastructure. a service ideal for businesses that demand high bandwidth and consistent performance.",
    image: "/images/techguy.png",
    SN: 3,
    keywords: ["Splicing & Termination", "High-Bandwidth Links", "Latency Optimization"],
  },
  {
    name: "Infrastructure Management / Maintenance",
    description:
      "We also offer proactive infrastructure monitoring and maintenance in industrial environment, making our goal that your systems stay healthy, updated, and fully optimized to minimize downtime and boost productivity.",
    image: "/images/portrait-hero.png",
    SN: 4,
    keywords: ["Proactive Monitoring", "Patch Management", "Uptime Optimization"],
  },
];

function NetworkSolutionsItems() {
  return (
    <div className="network-solution-items">
      {networkSolutions.map((item) => (
        <NetworkSolutionItem
          key={item.SN}
          image={item.image}
          title={item.name}
          description={item.description}
          keywords={item.keywords}
        />
      ))}
    </div>
  );
}

export default NetworkSolutionsItems