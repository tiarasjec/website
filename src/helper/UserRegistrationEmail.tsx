import { auth } from "@/auth";
import { tiaraAssetsPrefix } from "@/lib/utils";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface UserRegistrationEmailProps {
  events: string[];
  name?: string;
  registrationLink?: string;
}

export const UserRegistrationEmail = async ({
  events,
  name,
  registrationLink,
}: UserRegistrationEmailProps) => {
  const previewText = `Registration Suceessful for Tiara 2024!`;
  const session = await auth();
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Img
              src={`${tiaraAssetsPrefix}/full_logo.png`}
              width={250}
              alt={name}
            />
            <Section className="mt-[32px] items-center">
              <h1>Tiara 2024 Registraion</h1>
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>
                You{"'"}re successfully Registered for Tiara 2024!
              </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {session?.user?.name ?? "User"},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Congratulations! You have successfully completed registration for
              Tiara 2024. <br />
              <br />
              Please find below the list of events you have registered for:
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
              <br />
              <br />
              We look forward to seeing you there!
            </Text>
            <Img
              className="mx-auto flex items-center justify-center py-4"
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${registrationLink}`}
              alt={name}
            />
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={`${tiaraAssetsPrefix}/rulebook.pdf`}
              >
                Download Rulebook
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Thanks & Regards, <br /> Team Tiara <br />
              For any queries and concerns, feel free to contact us at:
              tiara@sjec.ac.in
            </Text>
            <div className="flex flex-col items-center justify-center text-[12px] space-x-4">
              <Button href="https://tiarasjec.in/privacy">
                Privacy Policy
              </Button>
              &nbsp;|&nbsp;
              <Button href="https://tiarasjec.in/refund">
                Refund Policy
              </Button>
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

export default UserRegistrationEmail;
