


const Departments = () => {
    const departments = [
      {
        title: "Tech & Development",
        description: "Work on advanced S.H.I.E.L.D. tech and support the Avengers' mission with cutting-edge technology.",
        imgSrc: "/images/_03821003-e0d2-42f7-8153-d5d2ae09df9c.jpg",
      },
      {
        title: "Strategy & Intelligence",
        description: "Join the intelligence team to provide strategic insights and tactical support for field operations.",
        imgSrc: "/images/_0dcddbd1-f1f7-44c8-b284-5e884b26098a.jpg",
      },
      {
        title: "Field Operations",
        description: "Step into the action alongside Earth's mightiest heroes. Are you ready to protect the world?",
        imgSrc: "/images/_95ed26d9-e173-4ca6-b245-ac7b0ba97294.jpg",
      },
    ];
  
    return (
      <section>
        <h2 className="text-4xl text-center text-cyan-400 font-bold tracking-wide mb-10">Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {departments.map((department, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <img src={department.imgSrc} alt={department.title} className="h-60 w-full object-cover rounded-md" />
              <h3 className="text-2xl font-bold mt-4 text-cyan-400">{department.title}</h3>
              <p className="text-gray-300 mt-2">{department.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Departments;
  