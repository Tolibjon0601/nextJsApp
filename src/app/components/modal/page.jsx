import React, { useState } from "react";


const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">React Modal Example</h1>


      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={toggleModal}
      >
        Open Modal
      </button>


      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p className="mb-4">
          This is a reusable modal component. You can put any content here.
        </p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={toggleModal}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default ParentComponent;
