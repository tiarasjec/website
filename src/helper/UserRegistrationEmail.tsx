import { auth } from "@/auth";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface UserRegistrationEmailProps {
  registrationId?: string;
  teamName?: string;
  registrationLink?: string;
}

export const UserRegistrationEmail = async ({
  registrationId,
  teamName,
  registrationLink,
}: UserRegistrationEmailProps) => {
  const previewText = `Testing 1 2 3`;
  const session = await auth();
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px] items-center">
              <h1>Tiara 2024 Registraion</h1>
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>You{"'"}re successfully Registered for Tiara 2024!</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {session?.user?.name ?? "User"},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Congratulations! You have successfully completed registration for
              Tiara 2024. Your Registration ID is {registrationId}. <br />
              <br />
              Please find below the list of events you have registered for:{" "}
              <br />
              <br />
              We look forward to seeing you there!
            </Text>
            {/* <Section>
              <Row>
                <Column>
                  <Img
                    src={`${baseUrl}/_next/image?url=${teamImage}&w=400&q=75`}
                    alt={teamName}
                  />
                </Column>
              </Row>
            </Section> */}
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={registrationLink}
              >
                View your profile
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link
                href={registrationLink}
                className="text-blue-600 no-underline"
              >
                {registrationLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Thanks & Regards, <br /> Team Tiara <br />
              For any queries and concerns, feel free to contact us at:
              tiara@sjec.ac.in
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

UserRegistrationEmail.PreviewProps = {
  username: "username",
  registrationId: "registrationId",
  teamName: "teamName",
  registrationLink: "registrationLink",
} as UserRegistrationEmailProps;

export default UserRegistrationEmail;
