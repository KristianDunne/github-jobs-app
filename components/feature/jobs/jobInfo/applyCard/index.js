import styles from './styles.module.css';

export default function ApplyCard({ job }) {
  const { how_to_apply } = job;

  return (
    <div className="flex flex-col px-8 pt-10 pb-8 mx-6 mt-6 text-white break-words bg-right-bottom bg-no-repeat rounded-md bg-applycard-mobile bg-violet ">
      <h2 className="text-lg font-bold leading-5 ">How To Apply</h2>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
    </div>
  );
}
