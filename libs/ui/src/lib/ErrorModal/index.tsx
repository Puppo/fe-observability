import { getUserId, trackAction } from '@fe-observability/utils/errors';
import { useEffect } from 'react';
import { Portal } from './Portal';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  meta?: {
    componentSource?: string;
  };
}

export default function ErrorModal({
  isOpen,
  onClose,
  meta = {},
}: ErrorModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    trackAction('error_modal_displayed', {
      ...meta,
      userId: getUserId(),
    });
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">ERROR</p>
            <button className="delete" onClick={onClose} aria-label="close">
              X Close
            </button>
          </header>
          <section className="modal-card-body">
            An error occured{' '}
            {meta.componentSource ? `in ${meta.componentSource}` : ''}
          </section>
        </div>
      </div>
    </Portal>
  );
}
