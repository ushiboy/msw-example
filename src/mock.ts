import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const handlers = [
  http.get("/api/test", async () => {
    const headers = new Headers();
    const expires = (new Date(Date.now() + 10000)).toUTCString();
    headers.append("Set-Cookie", "a=1,2,3");
    headers.append("Set-Cookie", `b=no; Expires=${expires}`);
    console.log(headers.getSetCookie());
    return HttpResponse.json(
      {
        greeting: "hello",
      },
      {
        headers,
      }
    );
  }),
];

export const worker = setupWorker(...handlers);
