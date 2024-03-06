(async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mock");
    await worker.start();
  }

  await fetch("/api/test");
  document.getElementById("app")!.textContent = document.cookie;
})();
