import  React  from  'react';

const  DisplayCitation = ({ citation }) => {
   return (
      <div  className="DisplayCitation">
         <ul>
            <li>quote : {citation.quote}</li>
            <li>character : {citation.character}</li>
            <li><img  src={citation.image} alt="image1"/></li>
            <li>characterDirection : {citation.characterDirection}</li>
         </ul>
      </div>
   );
};

export  default  DisplayCitation;