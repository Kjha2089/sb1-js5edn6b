import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';


interface props{
    overlay: boolean,
	setOverlay: Function,
		
	// any props that come into the component
}

// const Button1: FC<Props> = ({ children, ...props }) => (
//     <Button {...props}>{children}</Button>
// );


const Disc: FC<props> = ({overlay, setOverlay }) => {
	return (
		<Modal
			
			size="lg"
			show={overlay}
			backdrop={'static'}
			onHide={() => setOverlay(false)}
			//aria-labelledby="example-modal-sizes-title-lg"
		>
			<Modal.Header closeButton>
				<Modal.Title>Disclaimer</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					As per{' '}
					<em>The Bar Council of India Rules and The Advocates Act, 1961,</em>{' '}
					an advocate cannot approach his/her client or advertise or promote his
					profession by way of advertisements or solicitation. Thus, this
					website has not been created to approach or solicit our client or
					advertise our firm but to provide some necessary information about our
					firm and services to our existing clients.
				</p>
				<p>
					{' '}
					Any user of this website is warned that the contents stated herein are
					not guaranteed to be accurate, up-to-date or complete. Century Law
					Firm disclaims all responsibilities and liabilities for interpretation
					or use of information contained on this website nor does it offer any
					warranty expressed or implied. The information provided under this
					website is solely available at your request for informational purposes
					only, should not be interpreted as soliciting or advisement.
				</p>
				<p>
					The contents of this website shall not be considered as Legal Advice
					as the contents thereof is not exhaustive. It is only introductory. In
					cases where the user has any legal issues, he/she in all cases must
					seek independent legal advice. We are not liable for any consequence
					of any action taken by the user relying on material/information
					provided under this website. The viewer acknowledges that he or she
					has read and understood the disclaimer as provided hereinabove.
				</p>
			</Modal.Body>
			<Modal.Footer >
				<button className="modal-btn" onClick={() => setOverlay(false)}>
					Proceed
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default Disc;
