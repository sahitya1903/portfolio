import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';
import {
  SiPython, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiMui, SiNodedotjs, SiExpress, SiMongoose, SiMongodb, SiMysql, SiDocker,
  SiGit, SiGithubactions, SiTensorflow, SiOpencv,
} from 'react-icons/si';

/* Count-up figures in the hero stat row. */
export const HERO_STATS = [
  { value: 2, label: 'Years Coding', suffix: '+' },
  { value: 5, label: 'Projects', suffix: '+' },
  { value: 1200, label: 'GitHub Contributions', suffix: '+' },
  { value: 15, label: 'Tech Stack Tools', suffix: '+' },
];

/* Skill logos for the auto-scrolling marquee (grayscale at rest, colour on hover). */
export const SKILLS = [
  { label: 'Java', Icon: FaJava, color: '#E76F00' },
  { label: 'Python', Icon: SiPython, color: '#4B8BBE' },
  { label: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { label: 'SQL', Icon: FaDatabase, color: '#9AA7B8' },
  { label: 'React', Icon: SiReact, color: '#61DAFB' },
  { label: 'Next.js', Icon: SiNextdotjs, color: '#F8FAFC' },
  { label: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { label: 'Bootstrap', Icon: SiBootstrap, color: '#8B6FD6' },
  { label: 'Material UI', Icon: SiMui, color: '#2E9BFF' },
  { label: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { label: 'Express.js', Icon: SiExpress, color: '#F8FAFC' },
  { label: 'Mongoose', Icon: SiMongoose, color: '#C0554F' },
  { label: 'REST APIs', Icon: TbApi, color: '#9AA7B8' },
  { label: 'MongoDB', Icon: SiMongodb, color: '#4FB65B' },
  { label: 'MySQL', Icon: SiMysql, color: '#5C93C4' },
  { label: 'Azure', Icon: VscAzure, color: '#3DA0EA' },
  { label: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { label: 'Git', Icon: SiGit, color: '#F05032' },
  { label: 'GitHub Actions', Icon: SiGithubactions, color: '#3B8EFF' },
  { label: 'TensorFlow', Icon: SiTensorflow, color: '#FF8F1F' },
  { label: 'OpenCV', Icon: SiOpencv, color: '#8C7BF2' },
];
