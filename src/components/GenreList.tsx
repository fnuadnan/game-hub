import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSeclectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSeclectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} onClick={() => onSeclectGenre(genre)} variant='link' fontSize={"lg"}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
