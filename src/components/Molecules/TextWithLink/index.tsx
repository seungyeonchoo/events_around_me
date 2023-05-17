import Text from '../../Atoms/Text';

export interface TextWithLinkProps {
  text: string;
  link: string; // url link
  link_text: string;
}

const TextWithLink = ({ text, link, link_text }: TextWithLinkProps) => {
  return (
    <div className="flex items-center justify-center w-[20rem] max-sm:w-full">
      <Text text_tag="p" size="xs" color="dark" extra_style="mr-10">
        {text}
      </Text>
      <Text text_tag="span" size="xs" color="primary" link={link} bold underline>
        {link_text}
      </Text>
    </div>
  );
};

export default TextWithLink;
