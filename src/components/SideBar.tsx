import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  onClickButton: (id: number) => void
  selectedGenreID: number
  genres: GenreResponseProps[]
}

export function SideBar({ onClickButton, selectedGenreID, genres }: SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => onClickButton(genre.id)}
          selected={selectedGenreID === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}