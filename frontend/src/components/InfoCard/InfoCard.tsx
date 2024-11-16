
import './InfoCard.css'


type InfoCardProps = {
    title: string;
    content: string;
    backgroundColor?: string;
    icon: string;
};

const InfoCard = ({ title, content, backgroundColor = 'black', icon }: InfoCardProps) => {
    return (
        <div className="info-card">
            <div className="info-card-body">
                <div className='logo' style={{ backgroundColor }} >
                    <img src={icon} />
                </div>
                <div className='title-box' >
                    <div className='title-content' >{title}</div>
                    <div className='title-task' >{content}</div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
