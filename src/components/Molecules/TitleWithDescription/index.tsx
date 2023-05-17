import Text from '../../Atoms/Text';

export interface TitleWithDescriptionProps {
  direction: 'col' | 'row';
  title_text: string;
  description: string;
  title_color: 'primary' | 'default' | 'secondary' | 'dark';
  text_color: 'primary' | 'default' | 'secondary' | 'dark';
}

const TitleWithDescription = ({
  title_text,
  title_color,
  text_color,
  description,
}: TitleWithDescriptionProps) => {
  return (
    <section className={`m-auto flex flex-col items-center justify-between`}>
      <Text text_tag="h1" size="4xl" color={title_color} bold extra_style="my-8">
        {title_text}
      </Text>
      <Text text_tag="p" size="sm" color={text_color}>
        {description}
      </Text>
    </section>
  );
};

export default TitleWithDescription;
