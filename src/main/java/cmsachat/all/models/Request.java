package cmsachat.all.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "request")
public class Request {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	


	private String label;
	
	private String comment;
	
	private Boolean approveManager;
	
	private Boolean approveUserAprovel;
	

	@ManyToOne
	private User user;
	
	@ManyToOne
	private Groupe groupe;

	
	
}
