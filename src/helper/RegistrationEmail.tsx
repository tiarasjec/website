import { auth } from "@/auth";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface RegistrationEmailProps {
  amount: number;
  events: string[];
  email: string;
  teamNames?: string[];
  contactNumber: string;
}

export const RegistrationEmail = async ({
  amount,
  events,
  email,
  teamNames,
  contactNumber,
}: RegistrationEmailProps) => {
  const session = await auth();
  const previewText = `${
    session?.user.name ?? "User"
  } has suceessful for Tiara 2024!`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="items-center">
              <h2>{session?.user.name ?? "User"} has Registered!</h2>
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>
                {session?.user?.name ?? "User"}, has successfully registered
              </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Please find below the list of events{" "}
              {session?.user?.name ?? "User"} has registered for:
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </Text>
            <Hr />
            <Text className="mt-2 text-black text-[14px] leading-[24px]">
              Contact Number: {contactNumber}
            </Text>
            <Text className="mt-2 text-black text-[14px] leading-[24px]">
              {teamNames?.length && (
                <>
                  <br />
                  Team Names: {teamNames.join(", ")}
                  <br />
                </>
              )}
            </Text>
            <Text className="mt-2 text-black text-[14px] leading-[24px]">
              Email: {email}
            </Text>
            <Text className="mt-2 text-black text-[14px] leading-[24px]">
              Amount Paid:{" "}
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(amount / 100)}
            </Text>
            <div className="flex flex-col items-center justify-center text-[12px] space-x-4">
              <Button href="https://tiarasjec.in/privacy">
                Privacy Policy
              </Button>
              &nbsp;|&nbsp;
              <Button href="https://tiarasjec.in/refund">Refund Policy</Button>
              &nbsp;|&nbsp;
              <Button href="https://tiarasjec.in/terms">
                Terms and Conditions
              </Button>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default RegistrationEmail;
