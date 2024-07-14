import AnimatedWrapper from "../components/ui/AnimatedWrapper";
import Container from "../components/ui/Container";

// import applications from '../data/applications'

const Applications = () => {
  return (
    <Container>
      <div className="text-center  mx-auto max-w-[480px] space-y-5 my-5">
        <h2 className="text-4xl font-semibold">Applications</h2>
        <p className="text-xs text-justify ">
          Unique MotorBrakes has proudly served a wide range of industrial
          applications with our high-quality range of products and technical
          expertise. With the help of long technical experience and a committed
          sale, service support - today we have become a trusted partner for the
          need of Brakes, Clutches & Torque Limiters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-screen-xl mx-auto my-8">
        {[...Array(10)].map((_, i) => {
          return (
            <AnimatedWrapper animateFrom="right" key={i}>
              <div className="size-40 sm:size-60 p-2 bg-green-300 mx-auto" />
            </AnimatedWrapper>
          );
        })}
      </div>
    </Container>
  );
};

export default Applications;
