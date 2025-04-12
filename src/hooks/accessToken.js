import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";
import { useDispatch } from "react-redux";
import { setIsPlayVideo } from "../redux/features/global/globalSlice";

export const useAccessToken = (payload, hasVideo) => {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ["accessToken"],
    enabled: hasVideo ? true : false,
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.accessToken, payload);

      if (data?.success) {
        dispatch(setIsPlayVideo(true));
        return data?.result;
      }
    },
  });
};
