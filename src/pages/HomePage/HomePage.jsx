import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import RSSUrlForm from "../../components/Forms/RSSUrlForm/RSSUrlForm";

function HomePage() {
  const history = useHistory();
  const [feeds, setFeeds] = useState([]);

  useState(() => {
    if(history?.location?.state) {
      setFeeds(history.location.state)
    } 
  },[history.location.state])

  const handleFeedDetailedRequest = (_, index) => {
    const feed = feeds.find((_, i) => i === index);
    history.push(`/feed/${index}`, { feed, feeds });
  };

  return (
    <div className="home">
      <RSSUrlForm setFeeds={setFeeds} />
      <div className="container">
        {feeds &&
          feeds.map((feed, index) => {
            const { title, description, imageSrc } = feed;
            return (
              <Fragment key={index}>
                <Feed
                  title={title}
                  description={description}
                  imageSrc={imageSrc}
                  index={index}
                  handleFeedDetailedRequest={handleFeedDetailedRequest}
                />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default HomePage;
