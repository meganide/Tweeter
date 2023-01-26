import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

function UserCard() {
  return (
    <section>
      <img
        className="max-h-[300px] w-full object-cover object-center"
        src="https://www.bsr.org/images/heroes/bsr-travel-hero..jpg"
        alt="background"
      />
      <section className="m-auto max-w-[75%]">
        <Card>
          <section className="flex gap-5">
            <Avatar big={true} />
            <section className="flex gap-7">
              <h2>Rayquaza</h2>
              <h3>
                2580 <span>Following</span>
              </h3>
              <h3>
                10020 <span>Followers</span>
              </h3>
              <section>
                <Button type="button" text="Follow" />
              </section>
            </section>
          </section>
        </Card>
      </section>
    </section>
  );
}

export default UserCard;
