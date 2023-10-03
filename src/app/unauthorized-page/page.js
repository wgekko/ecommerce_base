"use client";

export default function Unauthorized() {
  return (
    <section className="h-screen bg-[#E0E0F8]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-5">
              <h1 className="font-bold text-lg">
                ¡No tienes acceso para ver esta página!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
