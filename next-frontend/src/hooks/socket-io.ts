import { io } from "socket.io-client";

export const socket = io(`${process.env.NEST_API_URL}`, {
  autoConnect: false,
});