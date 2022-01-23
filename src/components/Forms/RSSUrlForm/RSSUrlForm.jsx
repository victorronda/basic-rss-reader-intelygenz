import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "../Form/Form";
import { isValidUrl } from "../../../utils/strings";
import { getJSONFeeds, getXMLFeeds } from "../../../utils/feeds";

function RSSUrlForm({ setFeeds }) {
  const [rssUrl, setRssUrl] = useState("");

  const getFeedsFromRSSUrl = async (e) => {
    e.preventDefault();
    const validFormats = ["json", "xml", "rss"];
    if (!isValidUrl(rssUrl) || !validFormats.some((format) => rssUrl.endsWith(format))) {
      setFeeds([{ 
        title: "Texto no válido",
        description: "Asegurate de que es una URL con formato de RSS en XML o JSON Feed"
      }]);
      setRssUrl("");
      setTimeout(() => {
        setFeeds([])
      }, 5000)
      return;
    }
    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
    const { contents } = await res.json();
    const feed = rssUrl.endsWith("json")
      ? JSON.parse(contents)
      : new window.DOMParser().parseFromString(contents, "text/xml");
    const feeds = rssUrl.endsWith("json")
      ? getJSONFeeds(feed, rssUrl) 
      : getXMLFeeds(feed, rssUrl);
    setFeeds(feeds);
    setRssUrl("");
  };

  const rssRrlFormInputs = [
    {
      name: "rss-url",
      type: "text",
      text: "Introduce URL de RSS Feeds (Válidos XML o JSON)",
      value: rssUrl,
      setValue: setRssUrl,
      labelClassName: "form-label fw-bold text-white",
      inputClassName: "form-control",
    },
  ];

  const rssRrlFormButtons = [
    {
      name: "search",
      type: "submit",
      text: "Buscar Feeds",
      buttonClassName: "btn btn-primary mx-auto w-50",
    },
  ];

  return (
    <Form
      inputs={rssRrlFormInputs}
      buttons={rssRrlFormButtons}
      onSubmit={getFeedsFromRSSUrl}
      formClassName="container-fluid w-50 my-5"
    />
  );
}

RSSUrlForm.propTypes = {
  setFeeds: PropTypes.func.isRequired,
};

export default RSSUrlForm;
