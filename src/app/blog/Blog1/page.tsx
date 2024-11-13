'use client'
import BookIcon from "@/Components/Icons/BookIcon";
import BulbIconBadge from "@/Components/Icons/BulbIconBadge";
import EntreprenureshipBadgeIcon from "@/Components/Icons/EntreprenureshipBadgeIcon";
import Web3IconBadge from "@/Components/Icons/Web3IconBadge";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";

export default function BlogPage() {
    const router = useRouter()
    const blogItems = [
        { icon: EntreprenureshipBadgeIcon, label: "Entrepreneurship", color: "#E68A11", bgColor: "#EEA54640", zIndex: 50, marginTop: 0, left: 0 },
        { icon: BulbIconBadge, label: "Innovation", color: "#0AC532", bgColor: "#46D36433", zIndex: 40, marginTop: 2, left: -20 },
        { icon: Web3IconBadge, label: "Web3", color: "#9747FF", bgColor: "#9747FF33", zIndex: 30, marginTop: 4, left: -40 },
    ]


    return (
        <div className="flex flex-col bg-[#131313] space-y-20 w-screen items-center justify-center pt-10">
            <div onClick={() => router.back()} className="flex flex-row cursor-pointer items-center space-x-5">
                <div className="h-[64px] w-[64px] rounded-[12.19px]">
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731414210/image_904_1_hg5p3h.webp"
                        alt="Ayo's profile picture"
                        objectFit="cover"
                        width={64}
                        height={64}
                        className=" rounded-[12.19px]"
                    />
                </div>
                <p className="text-[#6C6969] font-bricolage text-[36px] font-bold">Ayo</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-20">
                <div className="h-[239px] w-[1169px] flex flex-col justify-between">
                    <div className='w-[154px] h-[29px] border-[1px] border-[#E68A11] bg-[#EEA54640] rounded-[24px] flex flex-row items-center justify-center space-x-1'>
                        <EntreprenureshipBadgeIcon />
                        <p className='text-sm text-[#E68A11] font-geist'>Entrepreneurship</p>
                    </div>
                    <p className='text-[64px] text-[#FFFFFF] leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                    <p className='text-base text-white opacity-70 font-geist leading-none'>January 24, 2024</p>
                </div>

                <Image
                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731513563/Frame_2609761_wogdpc.webp"
                    width={1125}
                    height={486}
                    alt="Blog Image"
                />

                <p className="w-[1133px] text-white text-xl font-geist opacity-70">Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.</p>
                <p className="w-[1133px] text-white text-xl font-geist opacity-70">Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.</p>

                <div className="flex flex-col w-[1133px] space-y-5">
                    <p className="text-white opacity-70 font-geist text-[36px] ">Happening in the global market</p>
                    <p className="w-[1133px] text-white text-xl font-geist opacity-70">Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.</p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1731513553/Group_6000_x0njq1.webp"
                        width={679}
                        height={363}
                        alt="Blog Image"
                    />
                </div>

                <p className="w-[1133px] text-white text-xl font-geist opacity-70">Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.</p>
                <p className="w-[1133px] text-white text-xl font-geist opacity-70">Lorem ipsum dolor sit amet consectetur. Metus at sed lobortis ipsum sodales elementum. Maecenas tellus urna amet sed sit donec pulvinar. Nibh feugiat duis dignissim malesuada convallis tempus amet. Nulla nisl laoreet ornare nullam nunc. Pharetra volutpat orci et viverra porttitor sollicitudin. Viverra mattis at rhoncus id vestibulum. Potenti curabitur eget eu felis mauris gravida lectus. In id neque sed urna amet. Augue tortor turpis mauris vestibulum aliquam in. Ipsum ipsum dui donec ultrices arcu egestas cras. Eu nulla malesuada magna faucibus. Porta libero orci velit in metus. Adipiscing condimentum et ipsum libero congue. Amet sed tincidunt eu porttitor et dolor varius dictum. Placerat hac nunc posuere lectus odio nec dictumst ut lorem. Tellus posuere accumsan proin non tempor.</p>
            </div>

            <div className="flex flex-col items-center justify-center sapce-y-[20rem]">
                <div className="flex flex-row items-center w-[1133px] space-x-5">
                    <p className="text-white text-[120px] font-geist font-bold">READ MORE</p>
                    <BookIcon />
                </div>


                <ScrollArea className="w-[80%] pt-[10rem]" style={{ paddingBottom: '2rem' }}>
                    <div className='flex -space-x-2 pb-8 px-20 '>
                        {blogItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex-none w-[600px] h-[267px] bg-[#131313] rounded-[12px] cursor-pointer border border-[#262626] hover:border-white flex flex-col justify-center items-center hover:scale-95 transition ease-in-out`}
                                style={{
                                    zIndex: item.zIndex,
                                    marginTop: `${item.marginTop}rem`,
                                    left: `${index * 580 + item.left}px`,
                                }}
                            >
                                <div className='flex flex-col h-[195px] justify-between px-5'>
                                    <div
                                        className={` w-max h-[29px] border rounded-[24px] flex flex-row items-center justify-center space-x-1 px-3`}
                                        style={{ borderColor: item.color, backgroundColor: item.bgColor }}
                                    >
                                        <item.icon />
                                        <p className='text-sm font-medium' style={{ color: item.color }}>{item.label}</p>
                                    </div>
                                    <p className='text-[36px] text-white leading-none'>How Blockchain is Changing the Game for ClimateTech Solutions</p>
                                    <p className='text-base text-white leading-none'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    )
}