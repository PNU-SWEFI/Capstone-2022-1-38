import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { CommnunityCheckStatus, influencerLoadPosts } from "../actions/post";

const GetUserStatus = (communityId) => {
  const dispatch = useDispatch();
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      async function fetch() {
        await dispatch(CommnunityCheckStatus({ communityId: communityId }));
        await dispatch(influencerLoadPosts());
      }
      fetch();
    }
    // dispatch(getUserDataServer());
  }, [communityId]);
};

export default GetUserStatus;
