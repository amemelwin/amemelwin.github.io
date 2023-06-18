interface FuriType {
    context: String;
    furiStyle: String;
    style: String;
}
const furiConverter = ({ context, furiStyle, style }: any) => {
    if (!context.includes("！") && !context.includes("＾")) {
        return (<>
            <div className={`flex flex-row  ${style}`}>
                <div className="flex flex-col items-center leading-tight">
                    {/* {<div className={`text-${fontSize - 7}px`}>　</div>} */}
                    <div className="">{context}</div>
                </div>
            </div>
        </>)
    }
    const spliter = context.split("｜");
    const furi = (text: string) => {
        // ＾天（てん）気（き）
        text = text.substring(1);
        // 天（てん）気（き）
        const textArray = text.split("）")
        // ['天（てん', '気（き', '']
        return (<>
            <div className="flex flex-row mx-1">
                {
                    textArray.map((withfuri, i) => {
                        if (withfuri.length > 0) {
                            // ['天','てん']
                            const [kanji, furigana] = withfuri.split("（");
                            // search kanji from library
                           return (
                                    <div key={i} className="flex flex-col items-center leading-tight">
                                   <div className={`${furiStyle}`}>{furigana}</div>
                                        <div className="">{kanji}</div>
                                    </div>
                                )
                        }

                    })
                }
            </div>
        </>)
    }
    const furiUnderline = (text: string) => {
        // ！買（か）ったん
        text = text.substring(1);
        // 買（か）ったん
        const textArray = text.split("）")
        // [' 買（か', 'ったん']
        return (<>
            <div className="px-2 flex flex-row border-b-2 dark:border-white border-blue-500 mx-1">
                {
                    textArray.map((withfuri, i) => {
                        if (withfuri.length > 0) {
                            if (withfuri.includes("（")) {
                                // ['買','か']
                                const [kanji, furigana] = withfuri.split("（");
                                return (
                                        <div key={i} className="flex flex-col items-center leading-tight">
                                            <div className={`${furiStyle}`}>{furigana}</div>
                                            <div className="">{kanji}</div>
                                        </div>
                                    )
                            } else {
                                // 'ったん'
                                return (
                                    // px-2 flex flex-row border-b-2 border-blue-800
                                    <div key={i} className="flex flex-col items-center leading-tight">
                                        <div className={`${furiStyle}`}>　</div>
                                        <div className="">{withfuri}</div>
                                    </div>
                                )
                            }
                        }

                    })
                }
            </div>
        </>)
    }
    const normal = (text: string) => {
        return (<>
            <div className="flex flex-col items-center leading-tight">
                {<div className={`${furiStyle}`}>　</div>}
                <div className="">{text}</div>
            </div>
        </>)
    }
    return (<>
        <div className={`flex flex-row ${style}`}>
            {/* flex-wrap  */}
            {
                spliter.map((text:any, i:any) => {
                    return <div key={i} className={`flex flex-row ${style}`}>
                        {
                            text.includes("＾") ? furi(text) :
                                (text.includes("！") ? furiUnderline(text) : normal(text))
                        }
                    </div>
                })
            }
        </div>
    </>);
}

export default furiConverter;