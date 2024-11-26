import data from './data/data.json';

const Arrow = ({classes}) => (
  <svg className={classes} width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1094 9.79688L12.9375 17.0156L12.1406 17.8125L10.5469 16.2188L11.3438 15.4219L16.5938 10.125H1.125H0V7.875H1.125H16.5938L11.3438 2.625L10.5469 1.82812L12.1406 0.234375L12.9375 1.03125L20.1094 8.20312L20.9062 9L20.1094 9.79688Z" fill="#8C1515"/>
</svg>
);

const LinkCard = ({title, description, url = "#"}) => {
  return (
    <article className='group text-long flex flex-row gap-4 items-center w-full space-y-0 border-b border-[#E9E6DF] border-solid p-4 -ml-4 transition-all  hover:cursor-pointer hover:bg-[#f8f4ea]'>
      <div className='flex-grow'>
        <p className='font-bold text-xl m-0 group-hover:text-stanford'>{title}</p>
        <p className='text-lg m-0'>{description}</p>
      </div>
      <Arrow classes="ml-auto transition-all w-[22px] flex-shrink-0 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"/>
    </article> 
  )
}

export default function Home() {
  return (
    <div>
      {Object.keys(data).map((key, values) => (
        <div key={key} className='mt-16'>
          <h2 className='border-b border-[#E9E6DF] border-solid pb-4 pl-4 !-ml-4 !mb-0 !font-bold text-black text-3xl normal-case'>{key}</h2>
          {data[key].map((item, index) => (
            <LinkCard key={index} title={item.title} description={item.description} url={item.url} />
          ))}
        </div>
      ))}
    </div>
  );
}
