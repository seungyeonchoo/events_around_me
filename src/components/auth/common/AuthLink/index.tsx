import Text from '../../../../../src/components/common/Text';

export interface AuthLinkProps {
  text: string;
  link: string; // url link
  link_text: string;
}

const AuthLink = ({ text, link, link_text }: AuthLinkProps) => {
  return (
    <div className="flex items-center justify-center w-[20rem] max-sm:w-full mx-auto">
      <Text text_tag="p" size="xs" color="dark" extra_style="mr-10">
        {text}
      </Text>
      <Text
        text_tag="span"
        size="xs"
        color="primary"
        link={link}
        extra_style="hover:text-primary_strong"
        bold
        underline
      >
        {link_text}
      </Text>
    </div>
  );
};

export default AuthLink;
