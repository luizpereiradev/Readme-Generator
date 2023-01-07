import React from 'react';
import { FiInfo } from 'react-icons/fi';
import { GlobalContext } from '../../store/GlobalStorage';

function Alert() {
  const [show, setShow] = React.useState(true);
  const { notificationState: [notification] } = React.useContext(GlobalContext);
  React.useEffect(() => {
    if (notification) setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);// 2 seconds
    return () => clearTimeout(timer);
  }, [notification]);

  if (!show) return null;

  return (
    <div className={`flex gap-2 items-center ${notification.type === 'error' ? 'bg-yellow-500' : 'bg-blue-500'}  text-white text-sm font-bold px-2 absolute top-3 right-3 rounded-md`}>
      <FiInfo size={16} />
      <span className="py-3">{notification.notification}</span>
    </div>
  );
}

export default Alert;
