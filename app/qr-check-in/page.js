import QrCheckin from '../components/QrCheckin';
import BookDemo from '../components/BookDemo';
import PowerUI from '../components/PowerUI';

export default function Page() {
  return (
    <div className='bg-grid'>
      <QrCheckin />
      <PowerUI />
      <BookDemo />
    </div>
  );
}