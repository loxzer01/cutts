export default function Ads2(){

    return (
        <>
        
        <div className="ads">
            <iframe
            data-aa="2011983"
            src="//ad.a-ads.com/2011983?size=728x90"
            className="iframe"
            ></iframe> 
        </div>
        <style jsx>{`
           
            .ads {
                display: grid;
                place-content: center;
                padding: 1rem 0;
                background: var(--color-1);
                overflow: hidden;
            }
            .iframe{
                width:728px;
                height:90px;
                border:0px;
                padding:0;
                overflow:hidden;
                background-color: transparent;
                }

        `}</style>
        </>
    )
}