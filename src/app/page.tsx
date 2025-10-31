'use client';
import './page.css';
import {useEffect} from 'react';

export default function Home() {
    useEffect(() => {
        // 星空背景粒子
        const canvas = document.querySelector('.bg-canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        let w: number, h: number;
        let stars: { x: number; y: number; r: number; o: number; s: number }[] = [];

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            stars = Array.from({length: 120}, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.2,
                o: Math.random() * 0.8 + 0.2,
                s: Math.random() * 0.4 + 0.1,
            }));
        }

        function draw() {
            ctx!.clearRect(0, 0, w, h);
            ctx!.fillStyle = 'rgba(255,255,255,0.9)';
            for (const star of stars) {
                ctx!.globalAlpha = star.o;
                ctx!.beginPath();
                ctx!.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx!.fill();
                star.y -= star.s;
                if (star.y < -10) star.y = h + 10;
            }
            requestAnimationFrame(draw);
        }

        resize();
        draw();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div className="profile-page">
            <canvas className="bg-canvas"></canvas>

            <div className="profile-card">
                <h1 className="name">DIPENG XU</h1>
                <p className="title">文艺青年 · 不知名的Android、Web开发工程师</p>

                <p className="bio">
                    喜欢清晨的光，咖啡的香气<br/>
                    偶尔写写手账，记录日常的美好瞬间<br/>
                    喜欢漫步街头，感受城市的秩序与节奏<br/>
                </p>

                <p className="bio">
                    会读一下鲁迅、马尔克斯、奥威尔<br/>
                    听摇滚，看电影<br/>
                </p>

                <p className="bio">
                    我喜欢在冬天的时候<br/>
                    穿着一件羽绒服<br/>
                    配上一条牛仔裤或者工装服<br/>
                    再加上一双简单的运动鞋<br/>
                    戴着一块手表<br/>
                    就这样出门去寻找我最喜欢吃的冰店<br/>
                    我坐在冰店的窗口边上<br/>
                    感受着凛冽的北风呼啸声在我耳边划过<br/>
                    然后惬意地吃着冰沙<br/>
                    我想，这就是我最快乐的时候<br/>
                </p>

                <p className="epigraph">
                    「生活的艺术，不在于追求完美，而在于感受每一刻的温度。」
                </p>
            </div>
        </div>
    );
}
