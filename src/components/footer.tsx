import Container from "./container";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-4 mt-10 flex justify-center">
      <Container>
        <div className="flex justify-center items-center">
          <p className="text-white text-sm text-center">
            Developed by Manuel Afonso
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
