import React from 'react';
import Link from "next/link";

const Navigation = ({data}) => {
    return (
        <div className={'navigation_title'}>

            <div className={'navigation'}>

                {data.map(m =>
                    m.href === null ?
                        <div key={m.number} className={'child'}>
                                {m.name}
                        </div>
                        :
                        <div key={m.number} className={'flex_space'}>
                            <Link href={m.href}>
                                <div className={'child_hover'}>
                                    {m.name}
                                </div>
                            </Link>
                            <div className={'child_slash'}>
                                |
                            </div>
                        </div>
                )}

            </div>

            <h2>
                {data.length > 2 ?
                    data[2].name
                    :
                    data[1].name
                }
            </h2>
        </div>
    );
};

export default Navigation;