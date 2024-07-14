import AnimatedWrapper from "../ui/AnimatedWrapper";
import Container from "../ui/Container";

// import { clients } from "../../data/our-clients";

const OurClients = () => {
  return (
    <Container>
      <h3 className="my-10 text-4xl font-semibold text-center">Our Clients</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center max-w-screen-xl mx-auto my-8">
        {[...Array(30)].map((_, i) => {
          return (
            <AnimatedWrapper animateFrom="right" key={i}>
              <div className="size-20 md:size-28 lg:size-32 p-2 bg-green-300 mx-auto" />
            </AnimatedWrapper>
          );
        })}
      </div>
    </Container>
  );
};

export default OurClients;
