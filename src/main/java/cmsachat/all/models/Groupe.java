package cmsachat.all.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "groupe")
public class Groupe {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
	private String namegroupe;
	
}
