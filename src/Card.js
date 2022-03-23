import React from "react";
import { useHistory } from "react-router-dom";

export const Card = ({ match }) => {
  console.log("match.params.id : ", match.params.id);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const deletePicture = (id) => {
    console.log(id);
    goBack();
  };

  return (
    <>
      <div className="detail_nav">
        <button onClick={goBack}>X</button>
        <div className="detail_nav_right">
          <button>
            download
            <i className="fa fa-download" aria-hidden="true" />
          </button>
          <button
            onClick={() => {
              deletePicture(match.params.id);
            }}
          >
            <i data-fa-symbol="deleteFile" className="fas fa-trash fa-fw" />
          </button>
        </div>
      </div>

      <img
        className="detailpage"
        src={`https://resources.archisketch.com/images/${match.params.id}/550xAUTO/${match.params.id}.png`}
        alt="error"
      />
    </>
  );
};
