import { useState } from "react";

export const FileExplorer = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div className="container">
      <h5>
        {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        <span onClick={handleClick}>{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((childData, index) => (
          <FileExplorer key={index} folderData={childData} />
        ))}
    </div>
  );
};
