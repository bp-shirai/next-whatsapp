import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/api/webhooks/clerk/(.*)"]);

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect();
//   }
// });

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

/* import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)"
])
export default clerkMiddleware((auth, req) => {
  const userAuth = auth();  

  if(userAuth.userId && isPublicRoute(req)) {
    let path = "/select-org";

    if (userAuth.orgId) {
      path = `/organization/${userAuth.orgId}`;
    }

    const orgSelection = new URL(path, req.url);
    return NextResponse.redirect(orgSelection);
  }

  if(!userAuth.userId && !isPublicRoute(req)) {
    userAuth.protect()
  }

  if(userAuth.userId && !userAuth.orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", userAuth.orgId)
    return NextResponse.redirect(orgSelection)
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}; */
