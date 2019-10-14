import React from "react";
import { useQuery } from "@apollo/react-hooks";

import ArenasQuery from "../../queries/Arenas";

import ArenaList from "../../components/ArenaList";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const ArenaListScreen = ({ navigation }) => {
  const { longitude, latitude } = navigation.getParam("location");
  const { loading, error, data } = useQuery(ArenasQuery, {
    variables: {
      latitude, longitude, radius: 25,
    }
  });

  if (loading) { return <Loading />; }
  if (error) { return <ErrorMessage message={error.message}/>; }

  return (
    <ArenaList arenas={data.arenas} />
  );
};

export default ArenaListScreen;
